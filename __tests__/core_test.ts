import 'jest'
import {FileSystemOutput} from "../src/core";

describe('FileSystemOutput', () => {
    let instance: FileSystemOutput;

    beforeEach(() => {
        instance = new FileSystemOutput()
    });

    it('should generate next output filename matching pattern', async () => {
        let filename = instance.nextOutputFilename()
        expect(filename).toMatch(/output-.+?\.json/)
    });

    it('should generate unique output filename', async () => {
        let filename1 = instance.nextOutputFilename()
        let filename2 = instance.nextOutputFilename()
        expect(filename1).not.toBe(filename2)
    });

});