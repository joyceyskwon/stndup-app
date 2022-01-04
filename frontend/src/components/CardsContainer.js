import React from "react";
import Card from './Card';

const CardsContainer = (props) => {
  return (
    <>
      <div className="col-md-3 col-sm-10 mx-auto p-0">
        <Card 
          createItem={props.createItem}
          renderTabList={props.renderTabList}
          renderItems={props.renderItems}
        />
      </div>
    </>
  )
}

export default CardsContainer