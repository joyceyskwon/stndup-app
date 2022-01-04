import React from "react";
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';

const Card = (props) => {
  return (
    <>
      <div className="card p-3">
        <div className="mb-4">
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Add new task..."
            inputProps={{ 'aria-label': 'new task' }}
          />
          <IconButton type="submit" sx={{ p: '10px' }} aria-label="new">
            <CreateRoundedIcon 
              color='warning'
              onClick={props.createItem}
            />
          </IconButton>
        </div>
        {props.renderTabList()}
        <ul className="list-group list-group-flush border-top-0">
          {props.renderItems()}
        </ul>
      </div>
    </>
  )
}

export default Card