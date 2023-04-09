import { Match, Switch } from 'solid-js'
import SettingsApiKey from '../ui/SettingsApiKey'
import SettingsInput from '../ui/SettingsInput'
import SettingsSlider from '../ui/SettingsSlider'
// import SettingsSelect from '../ui/SettingsSelect'
import type { Accessor } from 'solid-js'
import type { SettingsUI } from '@/types/provider'

interface Props {
  settings: SettingsUI
  editing: Accessor<boolean>
  value: Accessor<string | number | boolean>
  setValue: (v: string | number | boolean) => void
}

export default ({ settings, editing, value, setValue }: Props) => {
  if (!settings.name || !settings.type) return null
  return (
    <div class="my-2">
      <Switch>
        <Match when={settings.type === 'api-key'}>
          <SettingsApiKey
            settings={settings}
            editing={editing}
            value={value as Accessor<string>}
            setValue={setValue}
          />
        </Match>
        <Match when={settings.type === 'input'}>
          <SettingsInput
            settings={settings}
            editing={editing}
            value={value as Accessor<string>}
            setValue={setValue}
          />
        </Match>
        {/* TODO: Bug-右侧select组件change事件会报错 */}
        {/* <Match when={settings.type === 'select'}>
          <SettingsSelect
            settings={settings}
            editing={editing}
            value={value as Accessor<string>}
            setValue={setValue}
          />
        </Match> */}
        <Match when={settings.type === 'slider'}>
          <SettingsSlider
            settings={settings}
            editing={editing}
            value={value as Accessor<number>}
            setValue={setValue}
          />
        </Match>
      </Switch>
    </div>
  )
}
