import { Fragment } from "react";
import CatalogItem from "./CatalogItem";

function Catalog (props) {
return (
  <Fragment>
    {props.items.map(item => (
      <CatalogItem key={item.id} item={item}></CatalogItem>
    ))}
  </Fragment>
);
}

export default Catalog;