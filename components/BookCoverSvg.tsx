const BookCoverSvg = ({ coverColor }: { coverColor: string }) => {
    return (
        <svg
            preserveAspectRatio="none"
            fill="none"
            width="137%"
            height="119%"
            viewBox="0 0 614.4 614.4"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0"
        >
  <path 
                className="st0" 
                d="M209.75,318.813c0.75,0.438,1.656,0.406,2.406-0.031l101.75-60.734c0.719-0.422,1.156-1.203,1.156-2.047
                    c0-0.828-0.438-1.625-1.156-2.031l-101.75-60.75c-0.75-0.422-1.656-0.438-2.406-0.031c-0.734,0.438-1.188,1.234-1.188,2.094V256
                    v60.719C208.563,317.594,209.016,318.391,209.75,318.813z"
                    fill="none"
                    stroke="slate"
            />
            <path 
                className="st0" 
                d="M432,0v36H80V0H0v512h80v-36h352v36h80V0H432z M56,476H24v-40h32V476z M56,396H24v-40h32V396z M56,316H24v-40
                    h32V316z M56,236H24v-40h32V236z M56,156H24v-40h32V156z M56,76H24V36h32V76z M432,428H80V84h352V428z M488,476h-32v-40h32V476z
                    M488,396h-32v-40h32V396z M488,316h-32v-40h32V316z M488,236h-32v-40h32V236z M488,156h-32v-40h32V156z M488,76h-32V36h32V76z"
                    fill={coverColor}
                    stroke="slate"
            />
        </svg>  
    );
};

export default BookCoverSvg;
