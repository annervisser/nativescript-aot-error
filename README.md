# nativescript-aot-error
Basic nativescript project with dependency that uses Reflect.getMetaData

When a dependency that relies on reflect is added, the nativescript AOT build doesn't run.

Running `tns run android --bundle` builds and runs. \
Running `tns run android --bundle --env.aot` builds but errors on startup.
