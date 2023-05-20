import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Gif, SerchResponse } from '../interfaces/gifs';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  public gifList: Gif[] = [];
  private tagHistory: string[] = [];

  private Gif_api_key: string = "S7Rhf5cla2OPRWvh227aeXcAuszR6F2w";

  private serviceUrl: string = "https://api.giphy.com/v1/gifs"



  constructor(private http: HttpClient) {
    this.loadLocalHistory();
  }

  get tagsHistory() {
    return [...this.tagHistory];
  }

  private organizateHistory(tag: string) {
    tag = tag.toLowerCase();
    if (this.tagsHistory.includes(tag)) {
      this.tagHistory = this.tagsHistory.filter((oldTag) => oldTag !== tag)
    }
    this.tagHistory.unshift(tag)
    this.tagHistory = this.tagHistory.slice(0, 10)
    this.serchLocalStorage()
  }

  private serchLocalStorage(): void {
    localStorage.setItem("history", JSON.stringify(this.tagHistory))
  }
  private loadLocalHistory(): void {
    if (!localStorage.getItem("history")) return; {
      this.tagHistory = JSON.parse(localStorage.getItem("history")!)
      if (this.tagHistory.length === 0) return;
      this.serchTag(this.tagHistory[0]);

    }

  }

  serchTag(tag: string): void {
    if (tag.length === 0) return;
    this.organizateHistory(tag)

    const params = new HttpParams()
      .set("api_key", this.Gif_api_key)
      .set("limit", "10")
      .set("q", tag)



    this.http.get<SerchResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe((resp) => {
        this.gifList = resp.data

      })


  }
}
