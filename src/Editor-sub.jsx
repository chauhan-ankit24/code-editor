import PropTypes from 'prop-types';
import './Editor.css';

const Editor = ({
    value,
    onValueChange,
    tabSize,
    ignoreTabKey,
    style,
    textareaClassName,
    placeholder
}) => {
    const handleChange = (event) => {
        onValueChange(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Tab' && !ignoreTabKey) {
            event.preventDefault();
            const { selectionStart, selectionEnd } = event.target;
            const newValue =
                value.substring(0, selectionStart) +
                ' '.repeat(tabSize) +
                value.substring(selectionEnd);
            onValueChange(newValue);
            // Move the cursor to the right position after adding spaces
            event.target.selectionStart = event.target.selectionEnd = selectionStart + tabSize;
        }
    };

    return (
        <textarea
            className={`editor-textarea ${textareaClassName}`}
            style={style}
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
        />
    );
};

Editor.propTypes = {
    value: PropTypes.string.isRequired,
    onValueChange: PropTypes.func.isRequired,
    highlight: PropTypes.func,
    tabSize: PropTypes.number,
    insertSpaces: PropTypes.bool,
    ignoreTabKey: PropTypes.bool,
    padding: PropTypes.object,
    style: PropTypes.object,
    textareaClassName: PropTypes.string,
    placeholder: PropTypes.string,
};

Editor.defaultProps = {
    highlight: (code) => code,
    tabSize: 2,
    insertSpaces: true,
    ignoreTabKey: false,
    padding: { top: 10, bottom: 10 },
    style: {},
    textareaClassName: '',
    placeholder: 'Enter your code here...',
};

export default Editor;
