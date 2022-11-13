import CodeTheme from "app/ui/kit/Code/CodeTheme"
import { EditorTheme } from "app/ui/synthetic/Editor/Editor.types"
import { MapActions } from "store/store.types"
import { ValuesOf } from "types"

import { Workspace } from "./types"

const initialState: Workspace = {
  drafts: {},
  settings: {
    editorTheme: EditorTheme.Light,
    codeTheme: CodeTheme.nord,
    darkThemeEnabled: false
  }
}

interface Actions {
  WORKSPACE_UPDATE: Workspace
  WORKSPACE_DRAFTS_UPDATE: Workspace["drafts"]
  WORKSPACE_SETTINGS_UPDATE: Workspace["settings"]
}

type Action = ValuesOf<MapActions<Actions>>

export default (state = initialState, action: Action): Workspace => {
  switch (action.type) {

    case "WORKSPACE_UPDATE":
      return { ...state, ...action.payload }

    case "WORKSPACE_DRAFTS_UPDATE":
      return {
        ...state,
        drafts: {
          ...state.drafts,
          ...action.payload
        }
      }

    case "WORKSPACE_SETTINGS_UPDATE":
      return {
        ...state,
        settings: {
          ...state.settings,
          ...action.payload
        }
      }

    default:
      return state
  }
}


export const updateWorkspace = (payload: Partial<Workspace>) => ({
  type: "WORKSPACE_UPDATE",
  payload
})

export const updateWorkspaceDrafts = (payload: Partial<Workspace["drafts"]>) => ({
  type: "WORKSPACE_DRAFTS_UPDATE",
  payload
})

export const updateWorkspaceSettings = (payload: Partial<Workspace["settings"]>) => ({
  type: "WORKSPACE_SETTINGS_UPDATE",
  payload
})
