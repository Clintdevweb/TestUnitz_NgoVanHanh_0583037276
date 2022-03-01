import React from "react";

export default function VerticalItem({item , renderSkill}) {
  return (
    <div className="row mb-5">
      <div className="col-4">
        <div className="card__header">
          <img
            src="https://source.unsplash.com/600x400/?computer"
            alt="card__image"
            className="card__image"
          />
        </div>
      </div>
      <div className="col-8">
        <div className="card__body">
          <span className="tag tag-blue">Psychology</span>
          <ul>{renderSkill(item?.skillsCollection?.items)}</ul>
        </div>
        <div className="card__footer">
          <div className="user">
            <img
              src={item?.avatarUrl?.url || "https://i.pravatar.cc/40?img=3"}
              alt="user__image"
              className="user__image"
            />
            <div className="user__info">
              <h5>{item.displayName}</h5>
              <small>{item.online ? "Online" : "Offline"}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
