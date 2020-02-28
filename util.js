function rectangle(){
  return{
      'permiter':function(width,height){
          return 2*(width+height)
      },
      'area':function(width,height){
          return width*height
      }
  }
}