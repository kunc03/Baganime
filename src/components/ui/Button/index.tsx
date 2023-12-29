type Propstypes = {
  stylesBtn?: string;
  nameBtn: string;
  onClick?: () => void;
  type?: string;
};

const Button = (props: Propstypes) => {
  const { stylesBtn, nameBtn, onClick } = props;
  return (
    <div>
      <button onClick={onClick} className={`px-6 py-2 rounded ring-1 ring-sky-700 ${stylesBtn} transition-all`}>
        {nameBtn}
      </button>
    </div>
  );
};

export default Button;
