import { Plugin } from "webpack";

declare class WriteFileWebpackPlugin extends Plugin {
  constructor(options?: {
    /** Atomically replace files content (i.e., to prevent programs like test watchers from seeing partial files) (default: true). */
    atomicReplace?: boolean;
    /** Stop writing files on webpack errors (default: true). */
    exitOnErrors?: boolean;
    /** Forces the execution of the plugin regardless of being using `webpack-dev-server` or not (default: false). */
    force?: boolean;
    /** Logs names of the files that are being written (or skipped because they have not changed) (default: true). */
    log?: boolean;
    /** A regular expression used to test if file should be written. When not present, all bundle will be written. */
    test?: RegExp;
    /** Use hash index to write only files that have changed since the last iteration (default: true). */
    useHashIndex?: boolean;
  });
}

export = WriteFileWebpackPlugin;
