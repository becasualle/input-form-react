const Popup = ({ showPopup, handlePopup }) => {

    const handleClosePopup = () => {
        handlePopup(false);
    }

    let text = '';
    if (showPopup[0]) {
        text = 'Please enter a valid age (<0)'
    } else if (showPopup[1]) {
        text = 'Please enter a valid name and age (non-empty values)'
    }

    return (
        <div className={`popup-layer ${showPopup[0] || showPopup[1] ? 'active' : ''}`}>
            <div className="popup">
                <h2>Invalid input</h2>
                <p>{text}</p>
                <button onClick={handleClosePopup}>Okay</button>
            </div>
        </div>
    );
}

export default Popup;