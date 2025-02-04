zephyr-tools
=================

A CLI to help improving the workflow when dealing with Zephyr


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/zephyr-tools.svg)](https://npmjs.org/package/zephyr-tools)
[![Downloads/week](https://img.shields.io/npm/dw/zephyr-tools.svg)](https://npmjs.org/package/zephyr-tools)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g zephyr-tools
$ zephyr COMMAND
running command...
$ zephyr (--version)
zephyr-tools/1.1.2 win32-x64 node-v20.9.0
$ zephyr --help [COMMAND]
USAGE
  $ zephyr COMMAND
...
```
<!-- usagestop -->
```sh-session
$ npm install -g zephyr-tools
$ zephyr COMMAND
running command...
$ zephyr (--version)
zephyr-tools/1.1.1 linux-x64 node-v18.20.4
$ zephyr --help [COMMAND]
USAGE
  $ zephyr COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`zephyr auth`](#zephyr-auth)
* [`zephyr bulk create`](#zephyr-bulk-create)
* [`zephyr help [COMMAND]`](#zephyr-help-command)
* [`zephyr plugins`](#zephyr-plugins)
* [`zephyr plugins add PLUGIN`](#zephyr-plugins-add-plugin)
* [`zephyr plugins:inspect PLUGIN...`](#zephyr-pluginsinspect-plugin)
* [`zephyr plugins install PLUGIN`](#zephyr-plugins-install-plugin)
* [`zephyr plugins link PATH`](#zephyr-plugins-link-path)
* [`zephyr plugins remove [PLUGIN]`](#zephyr-plugins-remove-plugin)
* [`zephyr plugins reset`](#zephyr-plugins-reset)
* [`zephyr plugins uninstall [PLUGIN]`](#zephyr-plugins-uninstall-plugin)
* [`zephyr plugins unlink [PLUGIN]`](#zephyr-plugins-unlink-plugin)
* [`zephyr plugins update`](#zephyr-plugins-update)

## `zephyr auth`

Authenticates with Zephyr API, see how you can generate a token here: https://support.smartbear.com/zephyr-scale-cloud/docs/en/rest-api/generating-api-access-tokens.html

```
USAGE
  $ zephyr auth

DESCRIPTION
  Authenticates with Zephyr API, see how you can generate a token here:
  https://support.smartbear.com/zephyr-scale-cloud/docs/en/rest-api/generating-api-access-tokens.html

EXAMPLES
  $ zephyr auth
```

_See code: [src/commands/auth/index.ts](https://github.com/joaoscheuermann/zephyr-tools/blob/v1.1.2/src/commands/auth/index.ts)_

## `zephyr bulk create`

describe the command here

```
USAGE
  $ zephyr bulk create -f <value> -t test-case|test-cycle

FLAGS
  -f, --file=<value>   (required)
  -t, --type=<option>  (required) Type of bulk create
                       <options: test-case|test-cycle>

DESCRIPTION
  describe the command here

EXAMPLES
  $ zephyr bulk create
```

_See code: [src/commands/bulk/create.ts](https://github.com/joaoscheuermann/zephyr-tools/blob/v1.1.2/src/commands/bulk/create.ts)_

## `zephyr help [COMMAND]`

Display help for zephyr.

```
USAGE
  $ zephyr help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for zephyr.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.14/src/commands/help.ts)_

## `zephyr plugins`

List installed plugins.

```
USAGE
  $ zephyr plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ zephyr plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.14/src/commands/plugins/index.ts)_

## `zephyr plugins add PLUGIN`

Installs a plugin into zephyr.

```
USAGE
  $ zephyr plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into zephyr.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the ZEPHYR_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the ZEPHYR_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ zephyr plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ zephyr plugins add myplugin

  Install a plugin from a github url.

    $ zephyr plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ zephyr plugins add someuser/someplugin
```

## `zephyr plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ zephyr plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ zephyr plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.14/src/commands/plugins/inspect.ts)_

## `zephyr plugins install PLUGIN`

Installs a plugin into zephyr.

```
USAGE
  $ zephyr plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into zephyr.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the ZEPHYR_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the ZEPHYR_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ zephyr plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ zephyr plugins install myplugin

  Install a plugin from a github url.

    $ zephyr plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ zephyr plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.14/src/commands/plugins/install.ts)_

## `zephyr plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ zephyr plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ zephyr plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.14/src/commands/plugins/link.ts)_

## `zephyr plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ zephyr plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ zephyr plugins unlink
  $ zephyr plugins remove

EXAMPLES
  $ zephyr plugins remove myplugin
```

## `zephyr plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ zephyr plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.14/src/commands/plugins/reset.ts)_

## `zephyr plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ zephyr plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ zephyr plugins unlink
  $ zephyr plugins remove

EXAMPLES
  $ zephyr plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.14/src/commands/plugins/uninstall.ts)_

## `zephyr plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ zephyr plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ zephyr plugins unlink
  $ zephyr plugins remove

EXAMPLES
  $ zephyr plugins unlink myplugin
```

## `zephyr plugins update`

Update installed plugins.

```
USAGE
  $ zephyr plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.14/src/commands/plugins/update.ts)_
<!-- commandsstop -->
* [`zephyr help [COMMAND]`](#zephyr-help-command)
* [`zephyr plugins`](#zephyr-plugins)
* [`zephyr plugins add PLUGIN`](#zephyr-plugins-add-plugin)
* [`zephyr plugins:inspect PLUGIN...`](#zephyr-pluginsinspect-plugin)
* [`zephyr plugins install PLUGIN`](#zephyr-plugins-install-plugin)
* [`zephyr plugins link PATH`](#zephyr-plugins-link-path)
* [`zephyr plugins remove [PLUGIN]`](#zephyr-plugins-remove-plugin)
* [`zephyr plugins reset`](#zephyr-plugins-reset)
* [`zephyr plugins uninstall [PLUGIN]`](#zephyr-plugins-uninstall-plugin)
* [`zephyr plugins unlink [PLUGIN]`](#zephyr-plugins-unlink-plugin)
* [`zephyr plugins update`](#zephyr-plugins-update)

## `zephyr help [COMMAND]`

Display help for zephyr.

```
USAGE
  $ zephyr help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for zephyr.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.14/src/commands/help.ts)_

## `zephyr plugins`

List installed plugins.

```
USAGE
  $ zephyr plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ zephyr plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.14/src/commands/plugins/index.ts)_

## `zephyr plugins add PLUGIN`

Installs a plugin into zephyr.

```
USAGE
  $ zephyr plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into zephyr.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the ZEPHYR_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the ZEPHYR_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ zephyr plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ zephyr plugins add myplugin

  Install a plugin from a github url.

    $ zephyr plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ zephyr plugins add someuser/someplugin
```

## `zephyr plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ zephyr plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ zephyr plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.14/src/commands/plugins/inspect.ts)_

## `zephyr plugins install PLUGIN`

Installs a plugin into zephyr.

```
USAGE
  $ zephyr plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into zephyr.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the ZEPHYR_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the ZEPHYR_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ zephyr plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ zephyr plugins install myplugin

  Install a plugin from a github url.

    $ zephyr plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ zephyr plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.14/src/commands/plugins/install.ts)_

## `zephyr plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ zephyr plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ zephyr plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.14/src/commands/plugins/link.ts)_

## `zephyr plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ zephyr plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ zephyr plugins unlink
  $ zephyr plugins remove

EXAMPLES
  $ zephyr plugins remove myplugin
```

## `zephyr plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ zephyr plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.14/src/commands/plugins/reset.ts)_

## `zephyr plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ zephyr plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ zephyr plugins unlink
  $ zephyr plugins remove

EXAMPLES
  $ zephyr plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.14/src/commands/plugins/uninstall.ts)_

## `zephyr plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ zephyr plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ zephyr plugins unlink
  $ zephyr plugins remove

EXAMPLES
  $ zephyr plugins unlink myplugin
```

## `zephyr plugins update`

Update installed plugins.

```
USAGE
  $ zephyr plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.14/src/commands/plugins/update.ts)_
<!-- commandsstop -->
