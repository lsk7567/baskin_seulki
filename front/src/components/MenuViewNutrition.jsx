export function MenuViewNutrition({
  servingsize,
  calory,
  sugar,
  protein,
  saturatedfat,
  natrium,
  allergy,
}) {
  return (
    <div className="menuviewnutrition_content">
      <div className="menuviewnutrition">
        <h3 className="menuviewnutrition_title">영양정보</h3>
        <dl className="menuviewnutrition_table">
          <div className="menuviewnutrition_item">
            <dt className="menuviewnutrition_name">1회 제공량</dt>
            <dd className="menuviewnutrition_text">{servingsize}</dd>
          </div>
          <div className="menuviewnutrition_item">
            <dt className="menuviewnutrition_name">열량(kcal)</dt>
            <dd className="menuviewnutrition_text">{calory}</dd>
          </div>
          <div className="menuviewnutrition_item">
            <dt className="menuviewnutrition_name">당류(g)</dt>
            <dd className="menuviewnutrition_text">{sugar}</dd>
          </div>
          <div className="menuviewnutrition_item">
            <dt className="menuviewnutrition_name">단백질(g)</dt>
            <dd className="menuviewnutrition_text">{protein}</dd>
          </div>
          <div className="menuviewnutrition_item">
            <dt className="menuviewnutrition_name">포화지방(g)</dt>
            <dd className="menuviewnutrition_text">{saturatedfat}</dd>
          </div>
          <div className="menuviewnutrition_item">
            <dt className="menuviewnutrition_name">나트륨(mg)</dt>
            <dd className="menuviewnutrition_text">{natrium}</dd>
          </div>
          <div className="menuviewnutrition_item">
            <dt className="menuviewnutrition_name">알레르기 성분</dt>
            <dd className="menuviewnutrition_text">{allergy}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
