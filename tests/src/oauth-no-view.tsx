import { showHUD } from "termcast";
import { getAccessToken, withAccessToken, OAuthService } from "@raycast/utils";

const linear = OAuthService.linear({ scope: "read write" });

async function Command() {
  const { token } = getAccessToken();
  await showHUD(token);
}

export default withAccessToken(linear)(Command);
