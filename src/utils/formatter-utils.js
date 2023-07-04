export const STATUSES = [
  { eng: 'new', rus: 'Новый' },
  { eng: 'in_progress', rus: 'В работе' },
  { eng: 'done', rus: 'Завершено' },
];

export const TYPES = [
  { eng: 'sport', rus: 'Горный' },
  { eng: 'general', rus: 'Прогулочный' },
];

export const dateFormatter = (date) => {
  const dateOptions = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };

  return new Date(date).toLocaleString('ru', dateOptions);
};

export const typeFormatterToRus = (currentType) =>
  TYPES.find((type) => type.eng === currentType).rus;

export const typeFormatterToEng = (currentType) =>
  TYPES.find((type) => type.rus === currentType).eng;

export const statusFormatterToRus = (currentStatus) =>
  STATUSES.find((status) => status.eng === currentStatus).rus;

export const statusFormatterToEng = (currentStatus) =>
  STATUSES.find((status) => status.rus === currentStatus).eng;
