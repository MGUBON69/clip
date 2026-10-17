Add-Type -AssemblyName System.Drawing
$src = [System.Drawing.Image]::FromFile('C:\Users\ADMIN\Downloads\z ai\.tmp-logo-src.png')
Write-Output ("SRC " + $src.Width + "x" + $src.Height)

function Resize-Logo([System.Drawing.Image]$img, [int]$targetH, [string]$out) {
  $w = [int][math]::Round($img.Width * $targetH / $img.Height)
  $bmp = New-Object System.Drawing.Bitmap($w, $targetH)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
  $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $g.DrawImage($img, 0, 0, $w, $targetH)
  $g.Dispose()
  $bmp.Save($out, [System.Drawing.Imaging.ImageFormat]::Png)
  $bmp.Dispose()
  Write-Output ("SAVED " + $out + " " + $w + "x" + $targetH)
}

Resize-Logo $src 160 'C:\Users\ADMIN\Downloads\z ai\.tmp-logo-head.png'
Resize-Logo $src 64  'C:\Users\ADMIN\Downloads\z ai\.tmp-logo-fav.png'
$src.Dispose()
Write-Output 'RESIZE_DONE'
