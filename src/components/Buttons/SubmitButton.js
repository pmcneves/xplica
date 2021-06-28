const SubmitButton = ({children}) => {
    return (
        <div>
            <button 
                type="submit" 
                className="btn btn-primary"
                onClick={e=>e.preventDefault()} 
                >
                    {children}
                </button>
        </div>
    )
}

export default SubmitButton
