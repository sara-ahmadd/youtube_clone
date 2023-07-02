import React from "react";

function Section({ title, data, setCategorySelected }) {
  return (
    <>
      <div className="section">
        <h3>{title}</h3>
        <div className="icons_list">
          {data &&
            data.length > 0 &&
            data.map((item) => {
              return (
                <button
                  className="list_item"
                  key={item.text}
                  onClick={() => setCategorySelected(item.text)}
                >
                  <div className="content">
                    {item.img ? (
                      <div>
                        <img src={item.img} alt={item.text} />
                      </div>
                    ) : (
                      item.icon
                    )}
                    <span>{item.text}</span>
                  </div>
                </button>
              );
            })}
        </div>
      </div>
      <hr />
    </>
  );
}

export default Section;
