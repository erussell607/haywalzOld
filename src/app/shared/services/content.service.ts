import { Injectable } from '@angular/core';

@Injectable()
export class ContentService {
  pages: Object = {
    'home': {title: 'Home', subtitle: 'Welcome Home!', content: 'Some home content.', image: 'assets/bg00.jpg'},
    'blog': {title: 'Blog', subtitle: 'Blog', content: 'Here is my blog.', image: 'assets/bg01.jpg'},
    'photography': {title: 'Photography', subtitle: 'Photography', content: 'Some pictures..', image: 'assets/bg02.jpg'},
    'about': {title: 'About', subtitle: 'About Us', content: 'Some content about us.', image: 'assets/bg00.jpg'},
    'contact': {title: 'Contact', subtitle: 'Contact Us', content: 'How to contact us.', image: 'assets/bg01.jpg'}
  };
}
