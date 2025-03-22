# Base image with Neovim and Bun
FROM ubuntu:latest

# Install all system dependencies in a single layer
RUN apt-get update && apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get update && \
    apt-get install -y \
        neovim \
        git \
        entr \
        python3 \
        python3-pip \
        nodejs && \
    ln -sf /usr/bin/python3 /usr/bin/python && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Set up user and directory structure in a single layer
RUN useradd -m -s /bin/false vimuser && \
    mkdir -p /home/vimuser/.config/nvim && \
    mkdir -p /playground && \
    chown -R vimuser:vimuser /home/vimuser/.config && \
    chown -R vimuser:vimuser /playground && \
    chmod -R 755 /home/vimuser/.config && \
    chmod 755 /playground

# Copy and set up rerun script
COPY rerun.sh /usr/local/bin/rerun.sh
RUN chmod 755 /usr/local/bin/rerun.sh && \
    chown vimuser:vimuser /usr/local/bin/rerun.sh

# Switch to non-root user
USER vimuser

# Set working directory
WORKDIR /playground

# Expose Neovim port
EXPOSE 9999

# Start Neovim server with verbose logging
CMD ["nvim", "--listen", "0.0.0.0:9999"]