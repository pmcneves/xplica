const SubmitButton = ({children}) => {
    return (
        <div>
            <button 
                type="submit" 
                className="btn btn-primary" 
                >
                    {children}
                </button>
        </div>
    )
}

export default SubmitButton
