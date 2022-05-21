import { ErrorAlerts } from "components/ErrorAlert";

import { store } from "store/store";

const Dispatcher = async (action, data = null) => {
  try {
    const originalPromiseResult = await store.dispatch(action(data)).unwrap();
    if (originalPromiseResult) {
      return originalPromiseResult;
    }
  } catch (rejectedValueOrSerializedError) {
    ErrorAlerts(rejectedValueOrSerializedError);
  }
  return null;
};

export default Dispatcher;
