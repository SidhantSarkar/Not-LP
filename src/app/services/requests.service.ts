import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http: HttpClient) { }

  private serverAddress = 'http://192.168.58.228:5000';

  private postData(url, body) {
    var header = new HttpHeaders();
    header.append('Accept', 'application/json');
    header.append('Content-Type', 'application/json' );
    const options = {
      headers :  header,
    }
    const finalLink = this.serverAddress + '/' + url;
    return this.http.post(finalLink, JSON.stringify(body), options);
  }

  private getData(url) {
    var header = new HttpHeaders();
    header.append('Accept', 'application/json');
    header.append('Content-Type', 'application/json' );
    const options = {
      headers :  header,
    }
    const finalLink = this.serverAddress + '/' + url;
    return this.http.get(finalLink, options);
  }

  createAssignment(body) {
    return this.postData('submit_assignment', body);
  }

  getAssignments() {
    return this.getData('get_assignments');
  }

  getStudsForAssignments(body) {
    return this.postData('get_students_for_assignments', body);
  }

  getAssignmentInfo(body) {
    return this.postData('get_assignment', body);
  }
  submitAnser(body) {
    return this.postData('submit_answer', body);
  }
  getResults(body){
    return this.postData('get_all_marks', body);
  }
  private test(){
    console.log('Test');
  }
}
