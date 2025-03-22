# Base image with Neovim and Bun
FROM ubuntu:latest

# Install Neovim and minimal dependencies
RUN apt-get update && apt-get install -y \
    neovim \
    git \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Create non-root user
RUN useradd -m -s /bin/false vimuser

# Create all necessary directories with proper permissions
RUN mkdir -p /home/vimuser/.config/nvim && \
    chown -R vimuser:vimuser /home/vimuser/.config && \
    chmod -R 755 /home/vimuser/.config

# Create playground directory with proper permissions
RUN mkdir -p /playground && \
    chown -R vimuser:vimuser /playground && \
    chmod 755 /playground

# Switch to non-root user
USER vimuser

# Set working directory
WORKDIR /playground

# Expose Neovim port
EXPOSE 9999

# Start Neovim server with verbose logging
CMD ["nvim", "-V10nvim.log", "--listen", "0.0.0.0:9999"]