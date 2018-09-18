import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import Button from './Button';

const List = ({
    tab,
    classListName,
    classListItemName,
    classButtonName,
    buttonHandler,
    buttonText,
    children,
    ...rest,
}) => (
    <ul className={classListName}>
      {tab.map((text, id) => (
        <ListItem
            key={id}
            text={text}
            className={classListItemName}
            {...rest}
        >
            {children}
            {buttonHandler && <Button className={classButtonName} onClickHandler={() => buttonHandler(id)} text={buttonText} />}
        </ListItem>
        )
      )}
    </ul>
    );

List.propTypes = {
    tab: PropTypes.array.isRequired,
    classListName: PropTypes.string,
    classListItemName: PropTypes.string,
    classButtonName: PropTypes.string,
    buttonHandler: PropTypes.func,
    buttonText: PropTypes.string,
    children: PropTypes.node,
}
List.defaultProps = {
    classListName: null,
    classListItemName: null,
    classButtonName: null,
    buttonHandler: null,
    buttonText: null,
    children: null,
}

export default List;
