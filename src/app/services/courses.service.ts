import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Course, sortCoursesBySeqNo} from '../model/course';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {json} from 'express';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) {
    console.log('service');
  }

  loadAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>('/api/courses')
      .pipe(map(result => result['payload']));
  }
}
