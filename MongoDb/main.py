import olefile
import os

# Define the file path for the new OLE file
file_path = 'sample_ole_file.doc'

# Define the name and content of the stream you want to create
stream_name = 'MyStream'
stream_content = b'Hello, olefile!' # The content must be bytes

# Check if the file already exists and remove it to avoid errors
if os.path.exists(file_path):
    os.remove(file_path)
    print(f"Removed existing file: {file_path}")

try:
    # Use a 'with' statement to open a new OLE file in write mode ('w').
    # This is the most reliable way to create and manage the file.
    with olefile.OleFileIO(file_path, write_mode='w') as ole:
        # Add the stream with its content to the OLE file.
        # The first argument is a list of strings representing the stream path.
        # The second argument is the content as bytes.
        ole.write_stream([stream_name], stream_content)
    
    # The 'with' statement automatically handles closing the file and saving all changes.
    print(f"Successfully created a new OLE file: {file_path}")
    print(f"It contains a stream named '{stream_name}'.")

except Exception as e:
    print(f"An error occurred while creating the OLE file: {e}")