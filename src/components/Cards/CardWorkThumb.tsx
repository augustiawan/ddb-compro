import react from "react";

export type TCardWorkThumbProps = {
  image: string;
  title: string;
  category: string;
  year: string;
};

const ConstructYear = ({ year }: { year: string }) => {
  const firstNum = year.slice(0, 2);
  const secondNum = year.slice(2, 4);

  return (
    <div className="font-medium text-18 leading-[21.6px] text-blue">
      <div className="block">{firstNum}</div>
      <div className="block">{secondNum}</div>
    </div>
  );
};

const CardWorkThumb = (props: TCardWorkThumbProps) => {
  return (
    <div className="block w-full group">
      {props.image && props.image !== "" && <img src={props.image} alt="" />}

      <div className="block py-8">
        <div className="flex justify-between items-start">
          <div className="block">
            {props.title && props.title !== "" && (
              <h6 className="underline group-hover:no-underline font-medium text-18 leading-[21.6px] text-blue">
                {props.title}
              </h6>
            )}
            {props.category && props.category !== "" && (
              <span className="block mt-8 text-12 leading-[14.4px] text-blue">
                {props.category}
              </span>
            )}
          </div>

          {props.year && props.year !== "" && (
            <ConstructYear year={props.year} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CardWorkThumb;
