import Item from './../item/index';
import Image from './../image/index';

export default function CardList() {
  return (
    <div className="card-list">
      <Item title={'Card title'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio rem fugit eaque voluptatem culpa sapiente quae ab nihil quisquam facilis. Enim nobis temporibus illum sint reprehenderit nihil ratione! Veniam, nemo?'}>
        <Image/> 
      </Item>
      <Item title={'Special title treatment'} text={'Optio rem fugit eaque voluptatem culpa sapiente quae ab nihil quisquam facilis.'}/>
    </div>
  )
}