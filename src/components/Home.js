import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppProvider";
import VerticalItem from "./VerticalItem";

export default function Home() {
  const items = useContext(AppContext);
  const [datas, setDatas] = useState(items);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("");
  const [vertical, setVertical] = useState(true);

  console.log(items);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilter = (e) => {
    setFilterTerm(e.target.value);
  };

  const renderSkill = (arraySkills) => {
    console.log(arraySkills);
    return arraySkills?.map((skill, i) => {
      return <li key={i}>{skill.displayName || ""}</li>;
    });
  };

  const renderHome = () => {
    return items
      .filter((item) => {
        if (searchTerm === "") {
          return item;
        } else if (
          item.displayName
            .trim()
            .toLocaleLowerCase()
            .includes(searchTerm.trim().toLocaleLowerCase())
        ) {
          return item;
        }
      })
      .filter((item) => {
        if (filterTerm === "") {
          return item;
        } else if (filterTerm === "online" && item.online) {
          return item;
        } else if (filterTerm === "offline" && !item.online) {
          return item;
        }
      })
      .map((item, i) => {
        //   console.log(item?.skillsCollection?.items);
        return !vertical ? (
          <div key={i} className="col-3 mb-5">
            <div className="cardGlobal">
              <div className="card__header">
                <img
                  src="https://source.unsplash.com/600x400/?computer"
                  alt="card__image"
                  className="card__image"
                />
              </div>
              <div className="card__body">
                <span className="tag tag-blue">Psychology</span>
                <ul>{renderSkill(item?.skillsCollection?.items)}</ul>
              </div>
              <div className="card__footer">
                <div className="user">
                  <img
                    src={
                      item?.avatarUrl?.url || "https://i.pravatar.cc/40?img=3"
                    }
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
        ) : (
          <VerticalItem key={i} item={item} renderSkill={renderSkill} />
        );
      });
  };
  return (
    <div className="mt-5">
      <h3 className="titleHead">Nhận tư vấn miến phí</h3>

      <div className="headerSearch mb-5">
        <div className="">
          <form>
            <input
              className="form-control"
              type="text"
              placeholder="Nhập tên tư vấn viên"
              onChange={handleSearch}
            />
          </form>
        </div>
        <div className="">
          <select className="formFilter form-control" onChange={handleFilter}>
            <option value="">Tất cả</option>
            <option value="online">Online</option>
            <option value="offline">Offline</option>
          </select>
        </div>
      </div>
      <div>
        {vertical ? (
          <i
            onClick={() => {
              setVertical(false);
            }}
            class="iconChange fa fa-list"
          ></i>
        ) : (
          <i
            onClick={() => {
              setVertical(true);
            }}
            class="iconChange fa fa-th"
          ></i>
        )}
      </div>
      <div className={!vertical ? "row" : ""}>{renderHome()}</div>
    </div>
  );
}
