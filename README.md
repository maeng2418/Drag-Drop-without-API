## Drag-Drop-without-API
> 드래그앤드랍을 API 없이 구현

## 구현방법
> mousedown 이벤트가 Note에서 발생할 경우, Note를 복제하여 마우스를 따라다닐 수 있는 DragElement를 생성한다.
> DragElement는 position:absolute와 top과 left를 이용하고 mousemove 이벤트 발생시 계속해서 위치값을 계산하여 업데이트한다.
> Column 또는 Note 위에서 mouseup 이벤트 발생 시, DragElement를 복제하여 새로운 Note를 만들고 삽입한다.

## 구현 이미지
<img src="https://user-images.githubusercontent.com/46251629/98536414-22a6e300-22cb-11eb-90e7-ac17dce58e37.gif" width="600px"/>
