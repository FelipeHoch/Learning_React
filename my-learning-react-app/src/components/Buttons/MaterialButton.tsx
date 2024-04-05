
interface IMaterialButtonProps {
    label: string;
    disabled?: boolean;
}

const MaterialButton = (props: IMaterialButtonProps) => {
    return (
        <button disabled={props.disabled}>
            {props.label}
        </button>
    );
};


export default MaterialButton;