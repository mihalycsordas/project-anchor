import {Injectable} from "@angular/core";
import { createClient, EntryCollection} from "contentful";
import {environment} from "../../../environments/environment";
import {NavigationItem} from "@app/layout/models";

@Injectable({
  providedIn: 'root',
})
export class NavigationItemService {

  private cdaClient = createClient({
    environment: environment.contentful.environment,
    space: environment.contentful.space,
    accessToken: environment.contentful.accessToken
  });

  getNavigationItems(query?: object): Promise<EntryCollection<NavigationItem>> {
    return this.cdaClient.getEntries<NavigationItem>(
      Object.assign({}, query, { content_type: "navigation" })
    );
  }
}
