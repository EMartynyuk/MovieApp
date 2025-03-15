export const Notifications = () => {
  return (
    <button className="notifications" aria-label="Уведомления">
      <svg className="notifications__svg">
        <use xlinkHref={"/img/sprite.svg" + "#bell"}></use>
      </svg>
    </button>
  );
};
