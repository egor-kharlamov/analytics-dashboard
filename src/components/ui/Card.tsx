interface ICards {
    children?: React.ReactNode;
    className?: string;
}

export const Card = ({children}: ICards) => {
    return(
        <div className="card">
            {children}
        </div>
    )
}