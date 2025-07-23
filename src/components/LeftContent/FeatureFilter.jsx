import { features } from '../../data/DataBase';

export default function FeatureFilter() {
  return (
    <div className="featuresSection">
      <label className="sectionLabel">Առավելություններ</label>
      <div className="checkboxsArray">
        {features.map((feature, index) => (
          <label className="customCheckbox" key={index}>
            <input type="checkbox" />
            <span className="checkmark"></span> {feature}
          </label>
        ))}
      </div>
    </div>
  );
}
