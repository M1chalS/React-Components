import classNames from "classnames";
import useNavigation from "../hooks/use-navigation";

function Link({to, children, className, activeClassName}) {
    const {navigate, currentPath} = useNavigation();
    const handleClick = (event) => {
        if(event.metaKey || event.ctrlKey)
        {
            return;
        }
        event.preventDefault();

        navigate(to);
    };

    const classes = classNames(
        'text-blue-500',
        className,
        currentPath === to && activeClassName
        );

    return (
        <a className={classes} href={to} onClick={handleClick}>{children}</a>
    );
}

export default Link;