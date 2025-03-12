import { LoaderCircle } from "lucide-react";
interface IButtonComponent {
  name: string;
  isLoading?: boolean;
  onClick?: () => void;
}
const ButtonComponent = (props: IButtonComponent) => {
  return (
    <>
      <button
        className="w-28 my-3 mt-4 bg-black text-white font-light cursor-pointer"
        disabled={props.isLoading}
        onClick={props.onClick}
      >
        {props.isLoading ? (
          <div className="flex gap-x-2 w-full items-center justify-center">
            <LoaderCircle className="animate-spin text-white" /> Please wait
          </div>
        ) : (
          props.name
        )}
      </button>
    </>
  );
};
export default ButtonComponent;
