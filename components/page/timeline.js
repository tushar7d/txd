const exp = require("constants");

let Left = (props) => {
  return (
    <li>
      <div className="timeline-middle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="timeline-start md:text-end mb-10">
        <time className="font-mono italic">{props.time}</time>
        <div className="text-lg font-black">{props.head}</div>
        {props.sub}
      </div>
      <hr />
    </li>
  );
};

let Right = (props) => {
  return (
    <li>
      <hr />
      <div className="timeline-middle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="timeline-end mb-12">
        <time className="font-mono italic">{props.time}</time>
        <div className="text-lg font-black">{props.head}</div>
        {props.sub}
      </div>
      <hr />
    </li>
  );
};

let Timeline = () => {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      <Left
        time="December,2023"
        head="Launch of new website"
        sub="Launched a brand new site"
      />
      <Right
        time="December,2023"
        head="Launch of new website"
        sub="Launched a brand new site"
      />
    </ul>
  );
};

export default Timeline;
