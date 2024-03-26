import { apiInitializer } from "discourse/lib/api";
import { testonijaTest } from '../components/below-site-header/below-site-header'

export default apiInitializer("0.11.1", (api) => {
  api.onPageChange(() => {

    testonijaTest();

  });
});
