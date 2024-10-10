function calculateTotal() {
    // Lấy giá trị tạm tính, phí vận chuyển và khuyến mãi vận chuyển
    let subtotal = parseInt(document.getElementById('subtotal').textContent.replace(/,/g, ''));
    let shippingFee = parseInt(document.getElementById('shippingFee').value);
    let shippingDiscount = parseInt(document.getElementById('shippingDiscount').value);

    // Tính tổng tiền
    let total = subtotal + shippingFee + shippingDiscount;

    // Hiển thị tổng tiền
    document.getElementById('totalPrice').textContent = total.toLocaleString('en-US');
}

