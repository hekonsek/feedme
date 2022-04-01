# FeedMe - mock data ingestion tool

## Installation

To install FeedMe execute the following command:

```bash
sudo npm install -g https://github.com/hekonsek/feedme/tarball/v0.8.0
```

## Usage

To generate some random data on the local file system, just execute `feedme` command in the target directory:

```
$ mkdir my-test-data
$ cd my-test-data
$ feedme

   ╭───────────╮
   │           │
   │   Done!   │
   │           │
   ╰───────────╯
```

FeedMe will generate a bunch of JSON files containing your random data:

```
$ ls
output-2c22012f-24ec-4a07-9175-2b2f0b7d5c6a.json  output-65d6d4fa-a73b-4465-b4fb-9301118ee851.json  output-b9848e29-5135-437f-9931-d8358001011c.json
output-308049c3-bfbe-491c-a5f4-5a278c9ad329.json  output-687db3c1-c254-46a9-9006-610d8486e45c.json  output-e8b6a64f-d6e6-45bb-806a-20a780074133.json
output-4dce18af-1fec-40ef-afa3-2bcf51c05e10.json  output-6a6b2673-c949-4de5-b5c0-5c5286cefc70.json
output-61096534-b01a-414e-8e52-258d9a6db385.json  output-b7668cf4-ce48-46c7-a70b-d8e0e8a7a1bc.json
```

Each file contains a batch of random products encoded in a JSON format:

```
$ head --bytes 200 output-2c22012f-24ec-4a07-9175-2b2f0b7d5c6a.json
{"products":[{"name":"e4e4ad84-8d3c-4ce6-8ff7-18bbc5ee52fb"},{"name":"41620217-4e71-4c47-971e-baca073a49c9"},{"name":"8464f6c6-dedf-4eb3-adc5-d3d6a40e7f14"},{"name":"08dbf8c2-ac85-464b-8d93-9c8387480f
```