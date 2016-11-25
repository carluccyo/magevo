import {Injectable} from '@angular/core';

function _window(): Window {
  // return the native window obj
  return window;
}

@Injectable()
export class WindowRef {

  length: number;

  get nativeWindow(): any {
    return _window();
  }

}
