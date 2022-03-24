export const API_URL = 'https://meddata.com.ua/';

export const HOME_ROUTES = {
  GET_DATA: `${API_URL}index.php?option=com_fabrik&format=raw&task=plugin.userAjax&method=Humanitarian&function=getDozSupply&supply=1`,
  UPDATE_ROW: `${API_URL}index.php?option=com_fabrik&format=raw&task=plugin.userAjax&method=Humanitarian&function=changeStatus`,
  ADD_ROW: '',
};

export const SUPPLY_DISTRIBUTION_ROUTES = {
  GET_DATA: `${API_URL}index.php?option=com_fabrik&format=raw&task=plugin.userAjax&method=Humanitarian&function=getSupplyDistribution`,
  UPDATE_ROW: '',
  ADD_ROW: '',
};
