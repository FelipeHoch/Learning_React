
interface IMaterialButtonProps {
    label: string;
}

const MaterialButton = (props: IMaterialButtonProps) => {
    return (
        <button>
            {props.label}
        </button>
    );
};


export default MaterialButton;