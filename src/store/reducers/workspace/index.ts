import CodeTheme from "app/ui/kit/Code/CodeTheme"
import { EditorTheme } from "app/ui/synthetic/Editor/Editor.types"
import { MapActions } from "store/store.types"
import { ValuesOf } from "types"

import { Workspace, WorkspaceEditorLanguage } from "./types"

const initialState: Workspace = {
  instances: {},
  editorLanguage: WorkspaceEditorLanguage.Python,
  settings: {
    editorTheme: EditorTheme.Light,
    codeTheme: CodeTheme.dark,
    darkThemeEnabled: false,
    useDrafts: true
  }
}

interface Actions {
  WORKSPACE_UPDATE: Workspace
  WORKSPACE_INSTANCES_UPDATE: Workspace["instances"]
  WORKSPACE_SETTINGS_UPDATE: Workspace["settings"]
}

type Action = ValuesOf<MapActions<Actions>>

export default (state = initialState, action: Action): Workspace => {
  switch (action.type) {

    case "WORKSPACE_UPDATE":
      return { ...state, ...action.payload }

    case "WORKSPACE_INSTANCES_UPDATE":
      return {
        ...state,
        instances: {
          ...state.instances,
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

export const updateWorkspaceInstances = (payload: Partial<Workspace["instances"]>) => ({
  type: "WORKSPACE_INSTANCES_UPDATE",
  payload
})

export const updateWorkspaceSettings = (payload: Partial<Workspace["settings"]>) => ({
  type: "WORKSPACE_SETTINGS_UPDATE",
  payload
})
