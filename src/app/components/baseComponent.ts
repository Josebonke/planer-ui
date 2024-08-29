import { Component, HostListener } from "@angular/core"

@Component({
  template:''
})
export class BaseCompontent {

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.getScreenSize()
  }

  getScreenSize():string{
    let size = ''
    let width:number = innerWidth
    let height : number =  innerHeight
    if(width <= 576)
      size = 'size-xs'
    else if(width >= 577 || width <= 768)
      size = 'size-sm'
    else if(width >= 769 || width <= 992)
      size = 'size-md'
    else if (width >= 993 || width <= 1199 )
      size =  'size-lg'
    else
      size = 'size-xl'
      console.log('size',size)
    return size
  }
}
