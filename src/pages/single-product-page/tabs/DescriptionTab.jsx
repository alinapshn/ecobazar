import { ExtraVideoCard } from "./ExtraVideoCard";
import "./descriptionTab.scss";

export function DescriptionTab() {
  return (
    <div className="description">
      <div className="description__wrapper">
        <div className="description__info">
          <div className="description__info-text">
            <p>
              Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at
              posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem
              vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet
              nisi porttitor vel. Etiam tincidunt metus vel dui interdum
              sollicitudin. Mauris sem ante, vestibulum nec orci vitae, aliquam
              mollis lacus. Sed et condimentum arcu, id molestie tellus. Nulla
              facilisi. Nam scelerisque vitae justo a convallis. Morbi urna
              ipsum, placerat quis commodo quis, egestas elementum leo. Donec
              convallis mollis enim. Aliquam id mi quam. Phasellus nec fringilla
              elit.
            </p>
            <p>
              Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui.
              Sed iaculis, metus faucibus elementum tincidunt, turpis mi viverra
              velit, pellentesque tristique neque mi eget nulla. Proin luctus
              elementum neque et pharetra.
            </p>
          </div>
          <ul className="description__info-list">
            <li className="description__info-item">
              100 g of fresh leaves provides.
            </li>
            <li className="description__info-item">
              Aliquam ac est at augue volutpat elementum.
            </li>
            <li className="description__info-item">
              Quisque nec enim eget sapien molestie.
            </li>
            <li className="description__info-item">
              Proin convallis odio volutpat finibus posuere.
            </li>
          </ul>
          <p>
            Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla
            blandit eros non turpis lobortis iaculis at ut massa.
          </p>
        </div>

        <div className="description__add">
          <ExtraVideoCard />
        </div>
      </div>
    </div>
  );
}
