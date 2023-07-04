import React from 'react';
import { STATUSES, statusFormatterToEng, statusFormatterToRus } from 'Utils/formatter-utils';

import { StyledIconButton } from 'Style/components';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import useStyles from './StolenBikes.module';

export const Colors = ({ value }) => {
  const classes = useStyles();
  return <div style={{ backgroundColor: value }} className={classes.color} />;
};

export const Delete = ({ value, deleteMessage }) => {
  const onDeleteBtnClicked = (messageId) => {
    deleteMessage({ messageId });
  };
  return (
    <StyledIconButton onClick={() => onDeleteBtnClicked(value)}>
      <DeleteForeverIcon />
    </StyledIconButton>
  );
};

export const Status = ({ value, id, editMessage, openResolution }) => {
  const classes = useStyles();
  const onStatusChanged = (e, id) => {
    const selectedStatus = statusFormatterToEng(e.target.value);
    if (selectedStatus === 'done') {
      openResolution(id);
    } else {
      editMessage({ messageId: id, newMessage: { status: selectedStatus } });
    }
  };

  return (
    <select
      className={classes.select}
      value={statusFormatterToRus(value)}
      onChange={(e) => onStatusChanged(e, id)}
    >
      {STATUSES.map((status, index) => (
        <option key={index} className={classes.option}>
          {status.rus}
        </option>
      ))}
    </select>
  );
};

export const Owner = ({ value, id, openEditMessage }) => {
  const classes = useStyles();
  const onOwnerButtonClicked = (id) => openEditMessage(id);

  return (
    <button className={classes.ownerButton} onClick={() => onOwnerButtonClicked(id)}>
      {value}*
    </button>
  );
};
